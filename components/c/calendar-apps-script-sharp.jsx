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
		"content": `<style>.n9ga6z02p {
  fill: currentColor;
  d: path("M14.45 22q-.425 0-.712-.288T13.45 21t.288-.712t.712-.288h2.825l-2.3-1.625q-.35-.25-.412-.638t.162-.737t.625-.413t.75.163l2.325 1.6l-.975-2.65q-.15-.375.025-.75t.575-.525t.775.025t.525.575l.95 2.65l.75-2.725q.125-.4.462-.612t.738-.088t.625.463t.1.737L21.225 22zM3 20V4h3V2h2v2h6V2h2v2h3v8.1q-.5-.075-1-.075t-1 .075V10H5v8h7q0 .5.075 1t.275 1z");
}
</style><path class="n9ga6z02p"/>`,
		"fallback": "material-symbols:calendar-apps-script-sharp",
	});
}

export default Component;
