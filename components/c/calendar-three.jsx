import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/t/thjsngspv.css';
import '../../css/d/dvbh-o_3k.css';
import '../../css/i/ir4w1bbvz.css';
import '../../css/y/y7bi9cblw.css';
import '../../css/m/m2_-kkbro.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGDa5rHbXE"><g class="wwvp95byt"><rect class="thjsngspv"/><path class="dvbh-o_3k"/><path class="ir4w1bbvz"/><path class="y7bi9cblw"/><path class="m2_-kkbro"/></g></mask></defs><path mask="url(#SVGDa5rHbXE)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:calendar-three",
	});
}

export default Component;
