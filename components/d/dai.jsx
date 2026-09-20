import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ro6_71b-k {
  fill: var(--svg-color--fdc134, #fdc134);
  fill-rule: evenodd;
  d: path("M11.675 3.871H4.742v5.226H3v2.323h1.742v1.16H3v2.323h1.742v5.226h6.933a8.17 8.17 0 0 0 7.63-5.226H21v-2.322h-1.185a8 8 0 0 0 0-1.162H21V9.098h-1.695a8.18 8.18 0 0 0-7.63-5.226m5.806 8.71q.06-.58 0-1.162H7.065v1.162h10.422zM7.065 14.904v2.903h4.482c2.207 0 4.14-1.167 5.168-2.903zm0-5.807h9.656a6 6 0 0 0-5.168-2.903H7.065z");
}
</style><path clip-rule="evenodd" class="ro6_71b-k"/>`,
		"fallback": "token-branded:dai",
	});
}

export default Component;
