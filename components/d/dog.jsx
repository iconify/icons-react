import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g15a1_blj.css';
import '../../css/w/w5vtyub8p.css';
import '../../css/w/wmgh7y3qg.css';
import '../../css/a/ascc13b3w.css';
import '../../css/a/abcww4r6u.css';
import '../../css/x/xu6e54b8g.css';
import '../../css/p/pr--5m2pt.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG2yIrzcih"><g class="ft5dv1b6b"><path class="g15a1_blj"/><path class="w5vtyub8p"/><circle class="wmgh7y3qg"/><circle class="ascc13b3w"/><path class="abcww4r6u"/><path class="xu6e54b8g"/><path class="pr--5m2pt"/></g></mask></defs><path mask="url(#SVG2yIrzcih)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:dog",
	});
}

export default Component;
