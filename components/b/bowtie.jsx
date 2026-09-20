import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":250};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mxu0u0tqf {
  d: path("M256 0L128.001 106.493L0 0v249.817l128.001-106.492L256 249.817V0zM150.135 124.908l77.552-64.521v129.042l-77.552-64.521zM28.313 60.387l77.553 64.521l-77.553 64.521V60.387z");
  fill: var(--svg-color--333, #333);
}
</style><path class="mxu0u0tqf"/>`,
		"fallback": "logos:bowtie",
	});
}

export default Component;
