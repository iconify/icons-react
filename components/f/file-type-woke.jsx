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
		"content": `<style>.sv_mtpjcq {
  fill: var(--svg-color--d1a103, #d1a103);
  d: path("M8.65 25.34h2.62l3.89-10.78c.32-.9.6-1.86.9-2.76c.23.9.58 1.92.9 2.8l3.8 10.74h2.62L30 6.66h-3.2L22.89 18.2c-.23.67-.52 1.66-.75 2.44l-.79-2.44l-3.89-11.53h-2.44L10.9 18.2c-.23.61-.5 1.54-.7 2.39l-.73-2.39L5.5 6.66H2z");
}
</style><path class="sv_mtpjcq"/>`,
		"fallback": "vscode-icons:file-type-woke",
	});
}

export default Component;
