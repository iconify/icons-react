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
		"content": `<style>.lzk9xibjp {
  fill: var(--svg-color--739574, #739574);
  d: path("m15.606 16.269l-1.844-3.019h3.55l2.775 4.631a10 10 0 0 0-2.861-14.407A10 10 0 0 0 3.913 17.881L12 3.875L16.688 12h-3.55L12 9.944l-1.894 3.306h2.644l1.844 3.125H8.306l-2.2 3.706A9.96 9.96 0 0 0 12 22a9.95 9.95 0 0 0 5.831-1.875z");
}
</style><path class="lzk9xibjp"/>`,
		"fallback": "token-branded:arv",
	});
}

export default Component;
