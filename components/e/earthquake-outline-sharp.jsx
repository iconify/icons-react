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
		"content": `<style>.vrj6c5bey {
  fill: currentColor;
  d: path("m8.775 21l-2.583-8.5H3v-1h3.937L9.1 18.517L12.566 3h.753l2.542 10.867l1.914-6.156h.714L19.93 11.5h1.05v1h-1.777L18.19 9.748l-2.043 6.54h-.756l-2.45-10.532L9.55 21z");
}
</style><path class="vrj6c5bey"/>`,
		"fallback": "material-symbols-light:earthquake-outline-sharp",
	});
}

export default Component;
