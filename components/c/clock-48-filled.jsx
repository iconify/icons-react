import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.xbjmgdc-v {
  fill: currentColor;
  d: path("M24 5c10.493 0 19 8.507 19 19s-8.507 19-19 19S5 34.493 5 24S13.507 5 24 5m-1.25 7c-.69 0-1.25.56-1.25 1.25v12c0 .69.56 1.25 1.25 1.25h8a1.25 1.25 0 1 0 0-2.5H24V13.25c0-.69-.56-1.25-1.25-1.25");
}
</style><path class="xbjmgdc-v"/>`,
		"fallback": "fluent:clock-48-filled",
	});
}

export default Component;
