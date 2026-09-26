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
		"content": `<style>.htw7-ymao {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1C17.937 1 23 6.0629 23 12ZM13 17L17 17L17 15L13 15L13 17ZM8 13L17 13L17 11L8 11L8 13ZM7 9L14 9L14 7L7 7L7 9Z");
}
</style><path clip-rule="evenodd" class="htw7-ymao"/>`,
		"fallback": "keyline-icons:circle-align-offset-top-sharp-fill",
	});
}

export default Component;
