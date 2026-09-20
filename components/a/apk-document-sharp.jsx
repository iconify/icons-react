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
		"content": `<style>.d2bmgl79m {
  fill: currentColor;
  d: path("M7 19h10q-.1-1.225-.75-2.25t-1.7-1.625l.95-1.7q.05-.1.025-.225t-.15-.175q-.1-.05-.213-.025t-.162.125l-.975 1.75q-.5-.2-1-.312T12 14.45t-1.025.113t-1 .312L9 13.125Q8.95 13 8.838 13t-.238.05l-.1.375l.95 1.7q-1.05.6-1.7 1.625T7 19m2.4-1.65q-.15-.15-.15-.35t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15t-.35-.15m4.5 0q-.15-.15-.15-.35t.15-.35t.35-.15t.35.15t.15.35t-.15.35t-.35.15t-.35-.15M4 22V2h10l6 6v14zm9-13h5l-5-5z");
}
</style><path class="d2bmgl79m"/>`,
		"fallback": "material-symbols:apk-document-sharp",
	});
}

export default Component;
