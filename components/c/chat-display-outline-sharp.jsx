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
		"content": `<style>.imsslhbyw {
  fill: currentColor;
  d: path("M4 12v5.125V4zm2-1h12V9H6zm0-3h12V6H6zM2 22V2h20v10h-2V4H4v13.125L5.15 16H9v2H6zm4-8h3v-2H6zm5 8v-8h11v8zm2-2h7v-4h-7z");
}
</style><path class="imsslhbyw"/>`,
		"fallback": "material-symbols:chat-display-outline-sharp",
	});
}

export default Component;
