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
		"content": `<style>.oji0qi9ds {
  fill: currentColor;
  d: path("M18.175 18H15q-.425 0-.712-.288T14 17t.288-.712T15 16h3.175l-.875-.875q-.275-.3-.288-.712t.288-.713t.7-.3t.7.3l2.6 2.6q.3.3.3.7t-.3.7l-2.6 2.6q-.3.3-.7.3t-.7-.3t-.288-.712t.288-.713zM6 18l-2.15 2.15q-.25.25-.55.125T3 19.8V6q0-.825.588-1.412T5 4h12q.825 0 1.413.588T19 6v4q0 .425-.288.713T18 11t-.712-.288T17 10V6H5v10h6q.425 0 .713.288T12 17t-.288.713T11 18zm-1-2V6z");
}
</style><path class="oji0qi9ds"/>`,
		"fallback": "material-symbols:chat-paste-go-2-outline-rounded",
	});
}

export default Component;
