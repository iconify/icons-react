import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jok1bt80t.css';
import '../../css/u/uhp8mr7nr.css';
import '../../css/l/lizx6ggkd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGRaw5ebJl"><g class="ft5dv1b6b"><path class="jok1bt80t"/><path class="uhp8mr7nr"/><path class="lizx6ggkd"/></g></mask></defs><path mask="url(#SVGRaw5ebJl)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:arrow-keys",
	});
}

export default Component;
