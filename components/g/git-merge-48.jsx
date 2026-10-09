import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kkzs98bzj.css';
import '../../css/a/ajl3hnenw.css';
import '../../css/f/fq_nbabag.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kkzs98bzj"/><path class="ajl3hnenw"/><path class="fq_nbabag"/>`,
		"fallback": "energy-icons:git-merge-48",
	});
}

export default Component;
