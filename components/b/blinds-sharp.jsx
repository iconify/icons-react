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
		"content": `<style>.ksstxds-p {
  fill: currentColor;
  d: path("M3 20v-1h2V4h14v15h2v1zM6 7.75h8.25V5H6zm0 3.75h8.25V8.75H6zM6 19h12v-6.5h-2.75v2.248q.292.154.464.414q.17.26.17.588q0 .47-.333.802t-.805.333t-.8-.333t-.33-.802q0-.329.17-.588q.172-.26.464-.414V12.5H6zm9.25-11.25H18V5h-2.75zm0 3.75H18V8.75h-2.75z");
}
</style><path class="ksstxds-p"/>`,
		"fallback": "material-symbols-light:blinds-sharp",
	});
}

export default Component;
