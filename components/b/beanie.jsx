import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gawntob6o.css';
import '../../css/m/mrlv23wds.css';
import '../../css/g/g7rvrgblz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gawntob6o"/><path class="mrlv23wds"/><circle class="g7rvrgblz"><animateTransform id="SVGog72ocMZ" fill="freeze" additive="sum" attributeName="transform" begin="0s; x.end+2.58s" calcMode="spline" dur=".42s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" keyTimes="0; .4; .8; 1" type="translate" values="0 0; 0 -9; 0 3; 0 0"/><animateTransform id="SVGHEWJmZrv" fill="freeze" additive="sum" attributeName="transform" begin="1s; y.end+2.25s" calcMode="spline" dur=".75s" keySplines=".42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1; .42, 0, .58, 1" keyTimes="0; .22; .44; .67; .89; 1" type="rotate" values="0 256 256; -15 256 256; 9 256 256; -9 256 256; 6 256 256; 0 256 256"/></circle>`,
		"fallback": "meteocons:beanie",
	});
}

export default Component;
