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
		"content": `<style>.idpxgdche {
  fill: currentColor;
  d: path("M3.5 20.5q-.213 0-.357-.143T3 20t.143-.357t.357-.143h17q.214 0 .357.143T21 20t-.143.357t-.357.143zm4.495-3.88q-.303-.303-.303-.716V4.5q0-.413.303-.716t.717-.303t.716.303t.303.716v11.404q0 .413-.303.716t-.716.303t-.717-.303m6.577 0q-.303-.303-.303-.716V10.5q0-.413.303-.716t.717-.303t.716.303t.303.716v5.404q0 .413-.303.716t-.717.303t-.716-.303");
}
</style><path class="idpxgdche"/>`,
		"fallback": "material-symbols-light:align-vertical-bottom-outline-rounded",
	});
}

export default Component;
