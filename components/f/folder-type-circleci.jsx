import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jdmfvpbow {
  fill: var(--svg-color--55a3bf, #55a3bf);
  d: path("M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21Zm0 4.2h-8.2l1.1-2.1h7.1Z");
}

.rfwiax37e {
  fill: var(--svg-color--064c64, #064c64);
  d: path("M17.944 20.5a2.5 2.5 0 1 1 2.5 2.5a2.5 2.5 0 0 1-2.5-2.5m2.5-10.5a10.51 10.51 0 0 0-10.173 7.9a.3.3 0 0 0-.01.1a.5.5 0 0 0 .5.5h4.231a.48.48 0 0 0 .45-.294a5.5 5.5 0 1 1 0 4.574a.51.51 0 0 0-.45-.294h-4.229a.5.5 0 0 0-.5.5c0 .031.01.063.01.1A10.5 10.5 0 1 0 20.443 10Z");
}
</style><path class="jdmfvpbow"/><path class="rfwiax37e"/>`,
		"fallback": "vscode-icons:folder-type-circleci",
	});
}

export default Component;
