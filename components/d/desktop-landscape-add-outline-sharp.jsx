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
		"content": `<style>.ipkv3faex {
  fill: currentColor;
  d: path("M4 18V6zm2-2v-5h9v5zm-4 4V4h20v8h-2V6H4v12h9v2zm14.5-8V9.5H9V8h9v4zM18 22v-3h-3v-2h3v-3h2v3h3v2h-3v3z");
}
</style><path class="ipkv3faex"/>`,
		"fallback": "material-symbols:desktop-landscape-add-outline-sharp",
	});
}

export default Component;
