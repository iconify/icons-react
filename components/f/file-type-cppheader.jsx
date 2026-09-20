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
		"content": `<style>.w1huqbc0x {
  fill: var(--svg-color--984c93, #984c93);
  d: path("M2.395 25.5v-19h2.332v6.817a5.21 5.21 0 0 1 4.121-1.892a5.56 5.56 0 0 1 2.657.6a3.54 3.54 0 0 1 1.614 1.665a7.7 7.7 0 0 1 .486 3.085V25.5h-2.332v-8.722a3.6 3.6 0 0 0-.758-2.547a2.82 2.82 0 0 0-2.145-.8a3.8 3.8 0 0 0-1.951.538a3.04 3.04 0 0 0-1.3 1.458a6.7 6.7 0 0 0-.389 2.54V25.5Zm14.332-10.671v-2.344h2.344v2.344h2.344v2.343h-2.344v2.343h-2.344v-2.343h-2.342v-2.344zm8.201 0v-2.344h2.344v2.344h2.343v2.343h-2.343v2.343h-2.344v-2.343h-2.343v-2.344z");
}
</style><path class="w1huqbc0x"/>`,
		"fallback": "vscode-icons:file-type-cppheader",
	});
}

export default Component;
