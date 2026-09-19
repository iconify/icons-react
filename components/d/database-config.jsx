import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/k/k2ksg3lap.css';
import '../../css/m/mt4atkc2p.css';
import '../../css/j/jh4i9pblc.css';
import '../../css/c/c5h6ffb0g.css';
import '../../css/d/dhorj915t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGXM2tc6sx"><g class="wwvp95byt"><path class="k2ksg3lap"/><path class="mt4atkc2p"/><path class="jh4i9pblc"/><path class="c5h6ffb0g"/><path class="dhorj915t"/></g></mask></defs><path mask="url(#SVGXM2tc6sx)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:database-config",
	});
}

export default Component;
