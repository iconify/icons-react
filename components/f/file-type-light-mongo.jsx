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
		"content": `<style>.q3wsy90sn {
  fill: var(--svg-color--001e2b, #001e2b);
  d: path("M18.42 5.12c-1.17-1.39-2.17-2.81-2.38-3.1c-.02-.02-.05-.02-.08 0c-.21.29-1.21 1.71-2.38 3.1c-10.03 12.86 1.58 21.55 1.58 21.55l.1.07c.09 1.34.3 3.27.3 3.27h.87s.22-1.92.3-3.27l.1-.08s11.62-8.67 1.59-21.54m-2.43 21.35s-.52-.45-.66-.68v-.02l.63-14.01s.06-.04.06 0l.63 14.01v.02c-.14.23-.66.68-.66.68");
}
</style><path class="q3wsy90sn"/>`,
		"fallback": "vscode-icons:file-type-light-mongo",
	});
}

export default Component;
