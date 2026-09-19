import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/n/n14z80shh.css';
import '../../css/i/idauhp8zq.css';
import '../../css/p/pi8hrsboj.css';
import '../../css/x/xg9ll1rns.css';
import '../../css/j/jj4jy_bpm.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG92qCdlUN"><g class="s9cl3zbei"><path class="n14z80shh"/><path class="idauhp8zq"/><path class="pi8hrsboj"/><path class="xg9ll1rns"/><path class="jj4jy_bpm"/></g></mask></defs><path mask="url(#SVG92qCdlUN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:chimney",
	});
}

export default Component;
