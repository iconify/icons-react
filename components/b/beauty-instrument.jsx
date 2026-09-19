import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/y/ytvg11bfm.css';
import '../../css/o/o_40zda5w.css';
import '../../css/m/mjw21ebjq.css';
import '../../css/l/la16m58ta.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGV9feXchD"><g class="wwvp95byt"><path class="ytvg11bfm"/><rect class="o_40zda5w"/><path class="mjw21ebjq"/><path class="la16m58ta"/></g></mask></defs><path mask="url(#SVGV9feXchD)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:beauty-instrument",
	});
}

export default Component;
