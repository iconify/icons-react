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
		"content": `<style>.jg38byb6z {
  fill: currentColor;
  d: path("M4 20V4zm-2 2V2h20v10h-2V4H4v16h5v2zm3-3.5h2v-2h2v-2H7v-3h12v-.4l-1.925-5.6H6.925L5 11.1zm2.65-9l.7-2h7.3l.7 2zm2.063 4.213Q10 13.425 10 13t-.288-.712T9 12t-.712.288T8 13t.288.713T9 14t.713-.288m4.212 6.788h6.15q.125-.525.513-.913t.912-.512v-2.15q-.525-.125-.913-.513t-.512-.912h-6.15q-.125.525-.513.913t-.912.512v2.15q.525.125.913.513t.512.912m4.138-1.437q.437-.438.437-1.063t-.437-1.062T17 16.5t-1.062.438T15.5 18t.438 1.063T17 19.5t1.063-.437M11 22v-8h12v8z");
}
</style><path class="jg38byb6z"/>`,
		"fallback": "material-symbols:garage-money-outline-sharp",
	});
}

export default Component;
