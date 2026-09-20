import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdf-683ve.css';
import '../../css/k/klp5hwbos.css';
import '../../css/s/sfgbaqber.css';
import '../../css/c/cm_w1oirj.css';
import '../../css/e/ee7b3_bwb.css';
import '../../css/i/ivhcsttma.css';
import '../../css/i/idmixib8c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><symbol id="SVGLlWB2cAN" viewBox="0 0 359 231"><path class="wdf-683ve"/></symbol><symbol id="SVGOshnUcdC" viewBox="0 0 258 66"><g><path class="klp5hwbos"/><path class="sfgbaqber"/><path class="cm_w1oirj"/><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"/></g><g><path class="ee7b3_bwb"/><path class="ivhcsttma"/><path class="idmixib8c"/><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"/></g></symbol></defs><use width="359" height="231" href="#SVGLlWB2cAN" transform="translate(76.5 140.5)"/><use width="258" height="66" href="#SVGOshnUcdC" transform="translate(127 405)"/>`,
		"fallback": "meteocons:haze",
	});
}

export default Component;
