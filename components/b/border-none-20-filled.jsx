import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ou864lr_u {
  fill: currentColor;
  d: path("M8.75 3a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zm0 12.5a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5zM5.453 4.603c-.387.151-.696.46-.849.846a.75.75 0 1 1-1.413-.492h-.005a3 3 0 0 1 1.77-1.77v.004a.75.75 0 1 1 .497 1.412m9.944.846a1.5 1.5 0 0 0-.938-.878a.75.75 0 0 1 .586-1.38v-.005a3 3 0 0 1 1.77 1.77h-.005a.75.75 0 1 1-1.413.493M3.75 12a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.75.75m11.75-.75a.75.75 0 0 0 1.5 0v-2.5a.75.75 0 0 0-1.5 0zM5.453 15.398a1.5 1.5 0 0 1-.849-.846a.75.75 0 1 0-1.413.492h-.005a3 3 0 0 0 1.77 1.77v-.004a.75.75 0 1 0 .497-1.412m9.944-.846a1.5 1.5 0 0 1-.938.878a.75.75 0 0 0 .586 1.38v.005a3 3 0 0 0 1.77-1.77h-.005a.75.75 0 1 0-1.413-.493");
}
</style><path class="ou864lr_u"/>`,
		"fallback": "fluent:border-none-20-filled",
	});
}

export default Component;
