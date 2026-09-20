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
		"content": `<style>.uvbviac0f {
  fill: currentColor;
  d: path("M3 24q-.425 0-.712-.288T2 23v-2q0-.425.288-.712T3 20h18q.425 0 .713.288T22 21v2q0 .425-.288.713T21 24zm4.125-7q-.575 0-.913-.488t-.137-1.037l4.4-11.725q.125-.35.425-.55t.65-.2h.9q.375 0 .663.2t.412.55L17.95 15.5q.2.55-.137 1.025T16.9 17q-.35 0-.65-.2t-.425-.55l-.975-2.85H9.2l-1.025 2.875q-.125.35-.413.538T7.126 17M9.9 11.4h4.2l-2.05-5.8h-.1z");
}
</style><path class="uvbviac0f"/>`,
		"fallback": "material-symbols:format-color-text-rounded",
	});
}

export default Component;
