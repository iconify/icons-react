import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/aw8asbupg.css';
import '../../css/k/khai3abln.css';
import '../../css/y/ywu8tfbvo.css';
import '../../css/l/llngj8bvv.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnKHJubgT"><g class="s9cl3zbei"><path class="aw8asbupg"/><rect class="khai3abln"/><path class="ywu8tfbvo"/><path class="llngj8bvv"/></g></mask></defs><path mask="url(#SVGnKHJubgT)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:computer",
	});
}

export default Component;
