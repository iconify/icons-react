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
		"content": `<style>.pligib_1v {
  fill: currentColor;
  d: path("M11.304 11.373A4.25 4.25 0 0 1 15.117 9h17.766c1.62 0 3.098.92 3.813 2.373l6.661 13.53q.116.236.211.478A4.2 4.2 0 0 1 44 27.25v7.5A4.25 4.25 0 0 1 39.75 39H8.25A4.25 4.25 0 0 1 4 34.75v-7.5c0-.67.155-1.305.432-1.869q.095-.241.21-.477zm23.15 1.104a1.75 1.75 0 0 0-1.57-.977H15.116a1.75 1.75 0 0 0-1.57.977L8.367 23h31.267zM6.718 26.402a3.8 3.8 0 0 0-.219 1.262v7.086c0 .967.784 1.75 1.75 1.75h31.5a1.75 1.75 0 0 0 1.75-1.75v-7.086c0-.431-.074-.858-.219-1.262a1.75 1.75 0 0 0-1.531-.902H8.25a1.75 1.75 0 0 0-1.531.902M36 33a2 2 0 1 0 0-4a2 2 0 0 0 0 4");
}
</style><path class="pligib_1v"/>`,
		"fallback": "fluent:hard-drive-48-regular",
	});
}

export default Component;
