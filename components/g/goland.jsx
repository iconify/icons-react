import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fbv8mfbkk.css';
import '../../css/r/ryo6rdbxe.css';
import '../../css/k/ku3hjnb4p.css';
import '../../css/j/jebhxrjff.css';
import '../../css/x/xi1ngd08g.css';
import '../../css/x/x7_tfobjq.css';
import '../../css/p/pws7zcb7t.css';
import '../../css/z/z1l0463ad.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><linearGradient id="SVGdIHTK9Ev" x1="63.635" x2="39.318" y1="54.045" y2="1.596" gradientTransform="scale(2)" gradientUnits="userSpaceOnUse"><stop offset=".24" class="fbv8mfbkk"/><stop offset=".51" class="ryo6rdbxe"/></linearGradient><linearGradient id="SVGCkTvD1nV" x1="59.379" x2=".674" y1="4.381" y2="63.085" gradientTransform="scale(2)" gradientUnits="userSpaceOnUse"><stop offset=".27" class="ryo6rdbxe"/><stop offset=".7" class="ku3hjnb4p"/></linearGradient></defs><path class="jebhxrjff"/><path fill="url(#SVGdIHTK9Ev)" class="xi1ngd08g"/><path fill="url(#SVGCkTvD1nV)" class="x7_tfobjq"/><path class="pws7zcb7t"/><path class="z1l0463ad"/>`,
		"fallback": "devicon:goland",
	});
}

export default Component;
