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
		"content": `<style>.aa633tsyi {
  fill: currentColor;
  d: path("M5 22q-.425 0-.712-.288T4 21t.288-.712T5 20h14q.425 0 .713.288T20 21t-.288.713T19 22zm6.563-4.725q-.213-.1-.363-.3l-4.95-6.35q-.375-.5-.1-1.062T7.05 9H9V3q0-.425.288-.712T10 2h4q.425 0 .713.288T15 3v6h1.95q.625 0 .9.563t-.1 1.062l-4.95 6.35q-.15.2-.363.3t-.437.1t-.437-.1M12 14.75L14.9 11H13V4h-2v7H9.1zM12 11");
}
</style><path class="aa633tsyi"/>`,
		"fallback": "material-symbols:download-2-outline-rounded",
	});
}

export default Component;
