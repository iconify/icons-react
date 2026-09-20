import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kyfnv44rx {
  fill: currentColor;
  d: path("M11.75 13A2.25 2.25 0 0 1 14 15.25v8.5A2.25 2.25 0 0 1 11.75 26h-8.5A2.25 2.25 0 0 1 1 23.75v-8.5A2.25 2.25 0 0 1 3.25 13zm2.816-11a2.4 2.4 0 0 1 1.698.703l6.93 6.93A2.75 2.75 0 0 1 24 11.579V23.6a2.4 2.4 0 0 1-2.4 2.4h-7.508a3.24 3.24 0 0 0 .82-1.5H21.6a.9.9 0 0 0 .9-.9V12H16a2 2 0 0 1-2-2V3.5H6.4a.9.9 0 0 0-.9.9V12H4V4.4A2.4 2.4 0 0 1 6.4 2zm-4.181 13.751l-.935 4.95l-.996-4.95H6.502l-.952 4.95l-.958-4.95H3l1.553 7.499h1.949l.998-4.5l.954 4.5l1.93-.001L12 15.75zM15.5 10a.5.5 0 0 0 .5.5h5.94L15.5 4.06z");
}
</style><path class="kyfnv44rx"/>`,
		"fallback": "fluent:document-word-28-regular",
	});
}

export default Component;
