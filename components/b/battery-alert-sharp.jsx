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
		"content": `<style>.w51io5bbb {
  fill: currentColor;
  d: path("M7 22V4h3V2h4v2h3v18zm4-8h2V8h-2zm1 4q.425 0 .713-.288T13 17t-.288-.712T12 16t-.712.288T11 17t.288.713T12 18");
}
</style><path class="w51io5bbb"/>`,
		"fallback": "material-symbols:battery-alert-sharp",
	});
}

export default Component;
