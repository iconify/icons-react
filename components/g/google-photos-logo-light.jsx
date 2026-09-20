import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.kd9ascbuz {
  fill: currentColor;
  d: path("M232 122h-42.82A70 70 0 0 0 128 18a6 6 0 0 0-6 6v42.82A70 70 0 0 0 18 128a6 6 0 0 0 6 6h42.82A70 70 0 0 0 128 238a6 6 0 0 0 6-6v-42.82A70 70 0 0 0 238 128a6 6 0 0 0-6-6m-46-34a57.3 57.3 0 0 1-11 34h-41V30.31A58.08 58.08 0 0 1 186 88M88 70a57.3 57.3 0 0 1 34 11v41H30.31A58.08 58.08 0 0 1 88 70m-18 98a57.3 57.3 0 0 1 11-34h41v91.69A58.08 58.08 0 0 1 70 168m98 18a57.3 57.3 0 0 1-34-11v-41h91.69A58.08 58.08 0 0 1 168 186");
}
</style><path class="kd9ascbuz"/>`,
		"fallback": "ph:google-photos-logo-light",
	});
}

export default Component;
