import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o58hkebvg.css';
import '../../css/z/z_40f6buh.css';
import '../../css/g/gjun_2l6g.css';
import '../../css/h/hlymmml8s.css';
import '../../css/w/w49j0rbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwIxjhcvB"><g class="o58hkebvg"><path class="z_40f6buh"/><path class="gjun_2l6g"/><path class="hlymmml8s"/></g></mask></defs><path mask="url(#SVGwIxjhcvB)" class="w49j0rbvv"/>`,
		"fallback": "lets-icons:direction-alt-3-duotone-line",
	});
}

export default Component;
