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
		"content": `<style>.sogpq3b2s {
  fill: var(--svg-color--f7df1e, #f7df1e);
  d: path("M4.15 14.92h2.16v2.16h2.15v-6.46h2.16v8.61H4.15m8.62-8.61h6.46v2.15h-4.3v2.15h4.3v6.46h-6.46v-2.15h4.3v-2.15h-4.3m8.61-4.31h6.47v4.3h-2.16v-2.15h-2.15v6.46h-2.16");
}

.wdeij7bfj {
  fill: var(--svg-color--083344, #083344);
  d: path("M2 12.77h4.3v-4.3h15.08v2.15H30v8.61h-4.3v4.3H10.61v-2.15H2");
}
</style><path class="wdeij7bfj"/><path class="sogpq3b2s"/>`,
		"fallback": "vscode-icons:file-type-jsr",
	});
}

export default Component;
