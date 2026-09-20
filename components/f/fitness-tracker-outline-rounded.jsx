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
		"content": `<style>.z5ectb-_p {
  fill: currentColor;
  d: path("M9.75 22q-.35 0-.612-.187t-.363-.513L7.8 18.025q-.375-.4-.587-.925T7 16V8q0-.6.213-1.125T7.8 5.95l.975-3.25q.1-.325.363-.513T9.75 2h4.5q.35 0 .6.2t.35.525l.95 3.2q.4.425.625.95T17 8v8q0 .6-.213 1.125t-.612.95l-.95 3.2q-.1.325-.362.525t-.613.2zm.725-2H13.5l.3-1h-3.625zM10 17h4q.425 0 .713-.288T15 16V8q0-.425-.288-.712T14 7h-4q-.425 0-.712.288T9 8v8q0 .425.288.713T10 17m.175-12H13.8l-.3-1h-3.025zm1.8 0");
}
</style><path class="z5ectb-_p"/>`,
		"fallback": "material-symbols:fitness-tracker-outline-rounded",
	});
}

export default Component;
