import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/huo95kxbo.css';
import '../../css/t/txu8yubls.css';
import '../../css/a/arzvezb5a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="huo95kxbo"/><path class="txu8yubls"/><path class="arzvezb5a"/>`,
		"fallback": "energy-icons:heat-pump-ground-20-bold",
	});
}

export default Component;
