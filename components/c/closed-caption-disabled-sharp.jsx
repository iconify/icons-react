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
		"content": `<style>.bd0_y-b0q {
  fill: currentColor;
  d: path("M4 19V5.421L1.887 3.308l.713-.714l19.223 19.223l-.713.714L17.579 19zm16-1.817l-2.721-2.721h.029V13.23h-.885v.346h-.029l-2.586-2.586v-.799h2.615v.616h.885v-1.5h-4.346v.836L7.817 5H20zm-13.308-2.49h4.385V13.42l-.19-.19h-.695v.577H7.577v-3.656h1.154l-.798-.798h-1.24z");
}
</style><path class="bd0_y-b0q"/>`,
		"fallback": "material-symbols-light:closed-caption-disabled-sharp",
	});
}

export default Component;
