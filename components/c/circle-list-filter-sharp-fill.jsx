import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.j1jq17b5b {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C17.937 1 23 6.063 23 12C23 17.937 17.937 23 12 23C6.063 23 1 17.937 1 12C1 6.063 6.063 1 12 1ZM10 17H14V15H10V17ZM8.5 13H15.5V11H8.5V13ZM7 9H17V7H7V9Z");
}
</style><path clip-rule="evenodd" class="j1jq17b5b"/>`,
		"fallback": "keyline-icons:circle-list-filter-sharp-fill",
	});
}

export default Component;
