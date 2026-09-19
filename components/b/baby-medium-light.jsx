import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wa7daubvc.css';
import '../../css/e/e8xy7gp4x.css';
import '../../css/v/vn7ulgb4c.css';
import '../../css/r/rckp78qat.css';
import '../../css/y/y3n5ew-kq.css';
import '../../css/s/sdtgrrbdg.css';
import '../../css/a/aza2b6v_c.css';
import '../../css/r/rlk90acht.css';
import '../../css/e/ec0_7pzkd.css';
import '../../css/h/h8rus56-c.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wa7daubvc"/><path class="e8xy7gp4x"/><path class="vn7ulgb4c"/><path class="rckp78qat"/><path class="y3n5ew-kq"/><path class="sdtgrrbdg"/><path class="aza2b6v_c"/><path class="rlk90acht"/><path class="ec0_7pzkd"/><path class="h8rus56-c"/></g>`,
		"fallback": "fluent-emoji-flat:baby-medium-light",
	});
}

export default Component;
