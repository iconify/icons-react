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
		"content": `<style>.cg8fsf73c {
  fill: var(--svg-color--82bfa1, #82bfa1);
  fill-rule: evenodd;
  d: path("m18.105 8.876l6.173 2.667l-6.173 6ZM6.318 29L17.21 18.413L13.887 15.2ZM2 3l15.582 15.052V8.474Z");
}

.gyaqajbxz {
  fill: var(--svg-color--fa6340, #fa6340);
  fill-rule: evenodd;
  d: path("M27.436 8.473h-8.972L30 13.457Z");
}
</style><path class="cg8fsf73c"/><path class="gyaqajbxz"/>`,
		"fallback": "vscode-icons:file-type-snapcraft",
	});
}

export default Component;
