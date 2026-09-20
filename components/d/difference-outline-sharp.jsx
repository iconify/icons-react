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
		"content": `<style>.p6vk7pb7z {
  fill: currentColor;
  d: path("M12.5 11h2V9h2V7h-2V5h-2v2h-2v2h2zm-2 4h6v-2h-6zM6 19V1h9l6 6v12zm2-2h11V8l-5-5H8zm-6 6V7h2v14h11v2zm6-6V3z");
}
</style><path class="p6vk7pb7z"/>`,
		"fallback": "material-symbols:difference-outline-sharp",
	});
}

export default Component;
