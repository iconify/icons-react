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
		"content": `<style>.f2yr5sbuf {
  fill: currentColor;
  d: path("M14 19q.425 0 .713-.288T15 18t-.288-.712T14 17t-.712.288T13 18t.288.713T14 19m3 0q.425 0 .713-.288T18 18t-.288-.712T17 17t-.712.288T16 18t.288.713T17 19M3 13V2h18v11zm0 9v-7h18v7z");
}
</style><path class="f2yr5sbuf"/>`,
		"fallback": "material-symbols:hard-drive-2-sharp",
	});
}

export default Component;
