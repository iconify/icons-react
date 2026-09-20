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
		"content": `<style>.cmyuhhnvp {
  fill: currentColor;
  d: path("M8 11.5V10h8v1.5zm1 3V13h6v1.5zM3 20q-.825 0-1.412-.587T1 18V6q0-.825.588-1.412T3 4h18q.825 0 1.413.588T23 6v12q0 .825-.587 1.413T21 20zM4 6H3v12h1zm2 12h12V6H6zM20 6v12h1V6zm0 0h1zM4 6H3z");
}
</style><path class="cmyuhhnvp"/>`,
		"fallback": "material-symbols:aod-tablet-outline",
	});
}

export default Component;
