import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv130ab-t.css';
import '../../css/g/gx85gbbnh.css';
import '../../css/e/e5o8hlb3d.css';
import '../../css/z/znzfcwbhp.css';
import '../../css/l/lvfkzebln.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGxpa09duy"><g class="hv130ab-t"><path class="gx85gbbnh"/><path class="e5o8hlb3d"/><path class="znzfcwbhp"/><path class="lvfkzebln"/></g></mask></defs><path mask="url(#SVGxpa09duy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:coconut-tree",
	});
}

export default Component;
