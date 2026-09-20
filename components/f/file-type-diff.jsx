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
		"content": `<style>.qdt_x-bhc {
  fill: var(--svg-color--green, green);
  d: path("M12.992 10.95v6.017H6.975v6.017h6.017V29h6.017v-6.017h6.017v-6.016h-6.018V10.95Z");
}

.y3p-j3x9x {
  fill: var(--svg-color--c00000, #c00000);
  d: path("M6.975 3h18.05v6.017H6.975z");
}
</style><path class="y3p-j3x9x"/><path class="qdt_x-bhc"/>`,
		"fallback": "vscode-icons:file-type-diff",
	});
}

export default Component;
