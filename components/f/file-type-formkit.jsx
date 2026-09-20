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
		"content": `<style>.jqq1r5bff {
  stop-color: var(--svg-color--f8ce68, #f8ce68);
}

.py49ydjxp {
  stop-color: var(--svg-color--f79259, #f79259);
}

.zyx0l9gem {
  fill-rule: evenodd;
  d: path("M30.07 25.39v4.67h-14v-4.67ZM6.74 20.73v4.66H2.07v-4.66Zm4.66-4.67v4.67H6.74v-4.67Zm4.67-4.67v4.67H11.4v-4.67ZM11.4 6.73v4.66H6.74V6.73ZM6.74 2.06v4.67H2.07V2.06Z");
}
</style><defs><linearGradient id="SVGCjm3ebVq" x1="217.28" x2="217.34" y1="987.61" y2="987.51" gradientTransform="matrix(300 0 0 -300 -65182 296286.64)" gradientUnits="userSpaceOnUse"><stop offset="0" class="py49ydjxp"/><stop offset="1" class="jqq1r5bff"/></linearGradient></defs><path fill="url(#SVGCjm3ebVq)" class="zyx0l9gem"/>`,
		"fallback": "vscode-icons:file-type-formkit",
	});
}

export default Component;
