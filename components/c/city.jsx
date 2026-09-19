import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ta5echf4d.css';
import '../../css/m/mxpdy7boc.css';
import '../../css/w/wxoe-ccvl.css';
import '../../css/o/on9a5ksue.css';
import '../../css/i/im0r5vbnv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGh3nILcqj"><g class="ft5dv1b6b"><path class="ta5echf4d"/><rect class="mxpdy7boc"/><path class="wxoe-ccvl"/><rect class="on9a5ksue"/><path class="im0r5vbnv"/></g></mask></defs><path mask="url(#SVGh3nILcqj)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:city",
	});
}

export default Component;
