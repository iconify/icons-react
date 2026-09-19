import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_i3wktz.css';
import '../../css/q/q62z-xbsl.css';
import '../../css/q/qd07iqr1b.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZ9IljeSy"><g class="v3_i3wktz"><path class="q62z-xbsl"/><path class="qd07iqr1b"/></g></mask></defs><path mask="url(#SVGZ9IljeSy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:connection-box",
	});
}

export default Component;
