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
		"content": `<style>.ztm4ji3pa {
  fill: var(--svg-color--005f91, #005f91);
  d: path("M6.97 29V3h5.2v8.52c1.45-1.73 3.61-2.6 6.21-2.6c2.17 0 4.05.72 5.2 2.17c1.01 1.3 1.45 3.18 1.45 6.07V29h-5.2V18.02q0-2.38-.87-3.46c-.58-.73-1.59-1.02-2.74-1.02c-1.3 0-2.46.44-3.18 1.3c-.58.73-.87 2.03-.87 3.76V29Z");
}
</style><path class="ztm4ji3pa"/>`,
		"fallback": "vscode-icons:file-type-cheader",
	});
}

export default Component;
